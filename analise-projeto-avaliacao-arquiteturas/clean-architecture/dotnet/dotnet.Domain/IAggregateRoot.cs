namespace dotnet.Domain
{
    public interface IAggregateRoot : IEntity
    {
        int Version { get; }
    }
}