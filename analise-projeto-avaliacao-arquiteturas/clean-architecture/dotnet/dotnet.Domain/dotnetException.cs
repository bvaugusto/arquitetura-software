namespace dotnet.Domain
{
    using System;

    public class dotnetException : Exception
    {
        internal dotnetException()
        { }

        internal dotnetException(string message)
            : base(message)
        { }

        internal dotnetException(string message, Exception innerException)
            : base(message, innerException)
        { }
    }
}
