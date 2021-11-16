using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Echtler_Mobile.Data.Migrations
{
    public partial class addedBuchungen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Hausnummer",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Nachname",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Postleitzahl",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Stadt",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Straße",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Vorname",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Buchungen",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    WohnmobilId = table.Column<int>(type: "int", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    price = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Buchungen", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Buchungen_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Buchungen_Wohnmobile_WohnmobilId",
                        column: x => x.WohnmobilId,
                        principalTable: "Wohnmobile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Buchungen_UserId",
                table: "Buchungen",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Buchungen_WohnmobilId",
                table: "Buchungen",
                column: "WohnmobilId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Buchungen");

            migrationBuilder.DropColumn(
                name: "Hausnummer",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Nachname",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Postleitzahl",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Stadt",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Straße",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Vorname",
                table: "AspNetUsers");
        }
    }
}
