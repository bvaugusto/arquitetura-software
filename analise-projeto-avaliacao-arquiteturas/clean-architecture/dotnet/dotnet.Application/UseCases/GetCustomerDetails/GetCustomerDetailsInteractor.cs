﻿namespace dotnet.Application.UseCases.GetCustomerDetails
{
    using System.Threading.Tasks;
    using dotnet.Application.Repositories;
    using dotnet.Domain.Customers;
    using System.Collections.Generic;
    using dotnet.Application.Outputs;
    using dotnet.Domain.Accounts;

    public class GetCustomerDetailsInteractor : IInputBoundary<GetCustomerDetailsInput>
    {
        private readonly ICustomerReadOnlyRepository customerReadOnlyRepository;
        private readonly IAccountReadOnlyRepository accountReadOnlyRepository;
        private readonly IOutputBoundary<CustomerOutput> outputBoundary;
        private readonly IOutputConverter outputConverter;

        public GetCustomerDetailsInteractor(
            ICustomerReadOnlyRepository customerReadOnlyRepository,
            IAccountReadOnlyRepository accountReadOnlyRepository,
            IOutputBoundary<CustomerOutput> outputBoundary,
            IOutputConverter outputConverter)
        {
            this.customerReadOnlyRepository = customerReadOnlyRepository;
            this.accountReadOnlyRepository = accountReadOnlyRepository;
            this.outputBoundary = outputBoundary;
            this.outputConverter = outputConverter;
        }

        public async Task Process(GetCustomerDetailsInput input)
        {
            //
            // TODO: The following queries could be simplified
            //

            Customer customer = await customerReadOnlyRepository.Get(input.CustomerId);

            if (customer == null)
                throw new CustomerNotFoundException($"The customer {input.CustomerId} does not exists or is not processed yet.");

            List<AccountOutput> accounts = new List<AccountOutput>();

            foreach (var accountId in customer.Accounts)
            {
                Account account = await accountReadOnlyRepository.Get(accountId);

                //
                // TODO: The "Accout closed state" is not propagating to the Customer Aggregate
                //

                if (account != null)
                {
                    AccountOutput accountOutput = outputConverter.Map<AccountOutput>(account);
                    accounts.Add(accountOutput);
                }
            }

            CustomerOutput output = outputConverter.Map<CustomerOutput>(customer);

            output = new CustomerOutput(
                customer.Id,
                customer.PIN.Text,
                customer.Name.Text,
                accounts);

            outputBoundary.Populate(output);
        }
    }
}