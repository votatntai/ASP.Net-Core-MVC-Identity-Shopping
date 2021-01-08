using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(AuthenShop.Areas.Identity.IdentityHostingStartup))]

namespace AuthenShop.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) =>
            {
            });
        }
    }
}