# Project REST-Rant

REST-Rant is an app where users can review restaurants.
Part One: Open REST-Rant Part 1
Open the basic Express app you built earlier. This app will serve as the foundation for your REST-Rant application, which will manage places (restaurants) and later allow for adding reviews (rants).

Part Two: User Stories & Wireframes
User Stories
User Story 1:

As a: restaurant visitor
I need: to view a list of all available restaurants
So I can: choose a place to visit
User Story 2:

As a: restaurant visitor
I need: to view details about a specific restaurant
So I can: decide if I want to go there
User Story 3:

As a: restaurant owner
I need: to add a new restaurant to the list
So I can: attract more customers
User Story 4:

As a: restaurant owner
I need: to update information about my restaurant
So I can: ensure the information is accurate and current
User Story 5:

As a: restaurant owner
I need: to delete my restaurant from the list
So I can: remove it if it is no longer in operation
User Story 6:

As a: restaurant visitor
I need: to leave a review (rant) about a restaurant
So I can: share my experience with others
User Story 7:

As a: restaurant visitor
I need: to delete my review (rant) about a restaurant
So I can: remove it if my opinion changes
Wireframes
Create simple wireframes for the following pages:

Home Page
Places Index Page
Place Details Page
New Place Form
Edit Place Form
404 Page
These wireframes can be drawn electronically using tools like Figma or Sketch, or they can be sketched on paper.

Color Scheme
Primary Color: #3498db (Blue)
Secondary Color: #2ecc71 (Green)
Highlight Color: #e74c3c (Red)
Part Three: README Driven Development
Routes Table
Include the following table in your README.md file:

markdown
Copy code
| Method | Path                     | Purpose                                      |
|--------|--------------------------|----------------------------------------------|
| GET    | /                        | Home page                                    |
| GET    | /places                  | Places index page                            |
| POST   | /places                  | Create new place                             |
| GET    | /places/new              | Form page for creating a new place           |
| GET    | /places/:id              | Details about a particular place             |
| PUT    | /places/:id              | Update a particular place                    |
| GET    | /places/:id/edit         | Form page for editing an existing place      |
| DELETE | /places/:id              | Delete a particular place                    |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | *                        | 404 page (matches any route not defined above) |
Data Planning
Document the data to be stored for places (restaurants) in your README.md file:

markdown
Copy code
### Places (Restaurants) Data

Each place (restaurant) will have the following data:

- **Name**: `string` - The name of the restaurant
- **City**: `string` - The city where the restaurant is located
- **State**: `string` - The state where the restaurant is located
- **Cuisines**: `string` - The types of cuisines the restaurant offers
- **Pic**: `string` - A URL to a picture of the restaurant
Part Four: Plan Your Data
Include the above data structure for places in your README.md.

Example README.md
Here is an example of how your README.md might look:

markdown
Copy code
# REST-Rant

## User Stories

1. **As a** restaurant visitor, **I need** to view a list of all available restaurants **so I can** choose a place to visit.
2. **As a** restaurant visitor, **I need** to view details about a specific restaurant **so I can** decide if I want to go there.
3. **As a** restaurant owner, **I need** to add a new restaurant to the list **so I can** attract more customers.
4. **As a** restaurant owner, **I need** to update information about my restaurant **so I can** ensure the information is accurate and current.
5. **As a** restaurant owner, **I need** to delete my restaurant from the list **so I can** remove it if it is no longer in operation.
6. **As a** restaurant visitor, **I need** to leave a review (rant) about a restaurant **so I can** share my experience with others.
7. **As a** restaurant visitor, **I need** to delete my review (rant) about a restaurant **so I can** remove it if my opinion changes.

## Routes

| Method | Path                     | Purpose                                      |
|--------|--------------------------|----------------------------------------------|
| GET    | /                        | Home page                                    |
| GET    | /places                  | Places index page                            |
| POST   | /places                  | Create new place                             |
| GET    | /places/new              | Form page for creating a new place           |
| GET    | /places/:id              | Details about a particular place             |
| PUT    | /places/:id              | Update a particular place                    |
| GET    | /places/:id/edit         | Form page for editing an existing place      |
| DELETE | /places/:id              | Delete a particular place                    |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | *                        | 404 page (matches any route not defined above) |

## Places (Restaurants) Data

Each place (restaurant) will have the following data:

- **Name**: `string` - The name of the restaurant
- **City**: `string` - The city where the restaurant is located
- **State**: `string` - The state where the restaurant is located
- **Cuisines**: `string` - The types of cuisines the restaurant offers
- **Pic**: `string` - A URL to a picture of the restaurant