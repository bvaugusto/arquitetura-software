﻿using dotnet.Application.Outputs;

namespace dotnet.Application.UseCases.Deposit
{
    public class DepositOutput
    {
        public TransactionOutput Transaction { get; private set; }
        public double UpdatedBalance { get; private set; }
        public DepositOutput()
        {

        }

        public DepositOutput(TransactionOutput transaction, double updatedBalance)
        {
            Transaction = transaction;
            UpdatedBalance = updatedBalance;
        }
    }
}
