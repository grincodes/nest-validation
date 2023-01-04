Nest js helps with validation out of the box

it uses class-validator and class-transformers

Pipes are mostly used to valid incoming data into the system

below are the build in pipes that helps with validation
  - ValidationPipe
  - ParseIntPipe
  - ParseBoolPipe
  - ParseArrayPipe
  - ParseUUIDPipe

  Validation pipe is the most robost of them all as it makes
  use of class validator to validate complex object and throw appropriate and customizable errors

  these pipes can be used on a global or controller level

Using pipes Globally
   this code would be in the main
  `app.useGLobalPipes(new ValidationPipe())`

  **ValidationPipe** has some config options that can help 
  streamline validation like 
   - whitelist ; that stripes out object properties not defined on class validation class(DTO)

   # Transformation
   You can transform object from plain js objects to class objects according to thier DTO classes using `transform:true` prop on ValidationPipe
    `@UsePipes(new ValidationPipe({transform:true}))`

    We could also run explicit conversion using 
      - ParseIntPipe
      - ParseBoolPipe
      - ParseArrayPipe
      - ParseUUIDPipe

      Eg. 
      `@Get(':id')
          findOne(
            @Param('id', ParseIntPipe) id: number,
            @Query('sort', ParseBoolPipe) sort: boolean,
          ) {
            console.log(typeof id === 'number'); // true
            console.log(typeof sort === 'boolean'); // true
            return 'This action returns a user';
          }`

    we cold also validate arrays using 
    `@Body(new ParseArrayPipe({ items: CreateUserDto }))`
