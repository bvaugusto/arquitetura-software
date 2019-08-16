﻿namespace dotnet.Domain.Customers
{
    using System;
    using dotnet.Domain.ValueObjects;

    public class Customer : Entity, IAggregateRoot
    {
        public virtual Name Name { get; protected set; }
        public virtual PIN PIN { get; protected set; }
        public virtual int Version { get; protected set; }
        public virtual AccountCollection Accounts { get; protected set; }

        protected Customer()
        {
            Accounts = new AccountCollection();
        }

        public Customer(PIN pin, Name name)
            : this()
        {
            PIN = pin;
            Name = name;
        }

        public virtual void Register(Guid accountId)
        {
            Accounts = new AccountCollection();
            Accounts.Add(accountId);
        }
    }
}
