package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello World from Golang...")
	})

	err := app.Listen(":3001")
	if err != nil {
		panic(err)
	}
}
