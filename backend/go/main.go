package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET,POST,PUT,DELETE",
	}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello World from Golang...")
	})

	err := app.Listen(":3001")
	if err != nil {
		panic(err)
	}
}
