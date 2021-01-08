using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthenShop.Entities;
using AuthenShop.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AuthenShop.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        private readonly RoleManager<AppRole> _roleManager;

        public AdminController(RoleManager<AppRole> roleManager)
        {
            _roleManager = roleManager;
        }

        [HttpGet]
        public IActionResult CreateRole()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateRole(CreateRole _role)
        {
            if (ModelState.IsValid)
            {
                AppRole role = new AppRole
                {
                    Name = _role.RoleName
                };
                IdentityResult result = await _roleManager.CreateAsync(role);
                if (result.Succeeded)
                {
                    return StatusCode(200, "Success");
                }
            }
            return StatusCode(200, "Failed");
        }
    }
}