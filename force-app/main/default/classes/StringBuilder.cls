public virtual with sharing class StringBuilder
{
    protected String m_stringValue;

    
    public StringBuilder() {}
    public StringBuilder(List<String> values)
    {
        add(values);
    }
    public virtual void add(List<String> values)
    {
        for(String value : values)
            add(value);
    }
    public virtual void add(String value)
    {
        m_stringValue = ( m_stringValue==null ? value : m_stringValue + value );
    }
    public virtual String getStringValue()
    {
        return m_stringValue;
    }
}