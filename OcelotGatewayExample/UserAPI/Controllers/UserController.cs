﻿using Microsoft.AspNetCore.Mvc;
using UserAPI.Services;
using UserAPI.Models;

namespace UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        public UserController(IUserService _userService)
        {
            userService = _userService;
        }

        [HttpGet]
        public IEnumerable<User> UserList()
        {
            var userList = userService.GetUserList();

            return userList;
        }

        [HttpGet("{id}")]
        public User GetUserById(int id)
        {
            return userService.GetUserById(id);
        }

        [HttpPost]
        public User AddUser(User user)
        {
            return userService.AddUser(user);
        }

        [HttpPut]
        public User UpdateUser(User user)
        {
            return userService.UpdateUser(user);
        }

        [HttpDelete("{id}")]
        public bool DeleteUser(int id)
        {
            return userService.DeleteUser(id);
        }
    }
}
