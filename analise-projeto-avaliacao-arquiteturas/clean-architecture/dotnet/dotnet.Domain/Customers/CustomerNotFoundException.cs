﻿namespace dotnet.Domain.Customers
{
    public class CustomerNotFoundException : DomainException
    {
        public CustomerNotFoundException(string message)
            : base(message)
        { }
    }
}
