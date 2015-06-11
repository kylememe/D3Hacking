using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(D3Hacking.Startup))]
namespace D3Hacking
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
