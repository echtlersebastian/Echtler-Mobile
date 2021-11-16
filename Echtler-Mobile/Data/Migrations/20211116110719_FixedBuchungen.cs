using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Echtler_Mobile.Data.Migrations
{
    public partial class FixedBuchungen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Buchungen_AspNetUsers_UserId",
                table: "Buchungen");

            migrationBuilder.DropForeignKey(
                name: "FK_Buchungen_Wohnmobile_WohnmobilId",
                table: "Buchungen");

            migrationBuilder.DropIndex(
                name: "IX_Buchungen_UserId",
                table: "Buchungen");

            migrationBuilder.DropIndex(
                name: "IX_Buchungen_WohnmobilId",
                table: "Buchungen");

            migrationBuilder.RenameColumn(
                name: "WohnmobilId",
                table: "Buchungen",
                newName: "WohnmobilID");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Buchungen",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Buchungen",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Buchungen");

            migrationBuilder.RenameColumn(
                name: "WohnmobilID",
                table: "Buchungen",
                newName: "WohnmobilId");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Buchungen",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Buchungen_UserId",
                table: "Buchungen",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Buchungen_WohnmobilId",
                table: "Buchungen",
                column: "WohnmobilId");

            migrationBuilder.AddForeignKey(
                name: "FK_Buchungen_AspNetUsers_UserId",
                table: "Buchungen",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Buchungen_Wohnmobile_WohnmobilId",
                table: "Buchungen",
                column: "WohnmobilId",
                principalTable: "Wohnmobile",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
