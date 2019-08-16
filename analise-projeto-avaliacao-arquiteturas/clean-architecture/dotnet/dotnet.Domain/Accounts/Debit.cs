namespace dotnet.Domain.Accounts
{
    using dotnet.Domain.ValueObjects;
    using System;

    public class Debit : Transaction
    {
        protected Debit()
        {

        }

        public Debit(Guid accountId, Amount amount)
            : base(accountId, amount)
        {

        }

        public override string Description
        {
            get
            {
                return "Debit";
            }
        }
    }
}
