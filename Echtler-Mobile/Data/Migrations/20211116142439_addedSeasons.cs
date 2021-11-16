﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Echtler_Mobile.Data.Migrations
{
    public partial class addedSeasons : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "price",
                table: "Buchungen",
                newName: "Price");

            migrationBuilder.CreateTable(
                name: "PricingSeasons",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<float>(type: "real", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SeaonTable = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PricingSeasons", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PricingSeasons");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Buchungen",
                newName: "price");
        }
    }
}
