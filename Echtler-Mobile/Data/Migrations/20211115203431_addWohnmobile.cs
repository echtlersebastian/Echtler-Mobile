using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Echtler_Mobile.Data.Migrations
{
    public partial class addWohnmobile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Wohnmobile",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SchlafPlätze = table.Column<int>(type: "int", nullable: false),
                    Farbe = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wohnmobile", x => x.Id);
                });

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Wohnmobile");
 
        }
    }
}
