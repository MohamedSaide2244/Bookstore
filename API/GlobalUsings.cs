global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Threading.Tasks;
global using System.Security.Claims;
global using System.Security.Cryptography;
global using System.Text;
global using System.Net;
global using System.Text.Json;
global using System.ComponentModel.DataAnnotations.Schema;
global using Microsoft.Extensions.Options;
global using MongoDB.Driver;
global using MongoDB.Bson;
global using MongoDB.Bson.Serialization.Attributes;
global using API.Services;
global using API.Data;
global using API.DTOs;
global using API.Entities;
global using API.Interfaces;
global using API.Extensions;
global using Microsoft.AspNetCore.Builder;
global using Microsoft.AspNetCore.Hosting;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.AspNetCore.Authentication.JwtBearer;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.Extensions.Configuration;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.Extensions.Hosting;
global using Microsoft.Extensions.Logging;
global using Microsoft.IdentityModel.Tokens;
global using System.IdentityModel.Tokens.Jwt;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Authorization;
global using System.ComponentModel.DataAnnotations;
// global using AutoMapper.QueryableExtensions;
global using Microsoft.AspNetCore.Mvc.Filters;
