import { z } from "zod";

const fullNameValidationSchema = z.object({
  firstName: z.string({
    error: (iss) => {
      if (iss.input === undefined) return { message: "First name is required" };
      if (iss.code === "invalid_type")
        return { message: "First name must be a string" };
      return { message: "Invalid first name" };
    },
  }),

  lastName: z.string({
    error: (iss) => {
      if (iss.input === undefined) return { message: "Last name is required" };
      if (iss.code === "invalid_type")
        return { message: "Last name must be a string" };
      return { message: "Invalid last name" };
    },
  }),
});

const addressValidationSchema = z.object({
  street: z.string({
    error: (iss) => {
      if (iss.input === undefined) return { message: "Street is required" };
      if (iss.code === "invalid_type")
        return { message: "Street must be a string" };
      return { message: "Invalid street" };
    },
  }),

  city: z.string({
    error: (iss) => {
      if (iss.input === undefined) return { message: "City is required" };
      if (iss.code === "invalid_type")
        return { message: "City must be a string" };
      return { message: "Invalid city" };
    },
  }),

  country: z.string({
    error: (iss) => {
      if (iss.input === undefined) return { message: "Country is required" };
      if (iss.code === "invalid_type")
        return { message: "Country must be a string" };
      return { message: "Invalid country" };
    },
  }),
});

export const orderValidationSchema = z.object({
  productName: z.string({
    error: (iss) => {
      if (iss.input === undefined)
        return { message: "Product name is required" };
      if (iss.code === "invalid_type")
        return { message: "Product name must be a string" };
      return { message: "Invalid product name" };
    },
  }),

  price: z.number({
    error: (iss) => {
      if (iss.input === undefined) return { message: "Price is required" };
      if (iss.code === "invalid_type")
        return { message: "Price must be a number" };
      return { message: "Invalid price" };
    },
  }),

  quantity: z.number({
    error: (iss) => {
      if (iss.input === undefined) return { message: "Quantity is required" };
      if (iss.code === "invalid_type")
        return { message: "Quantity must be a number" };
      return { message: "Invalid quantity" };
    },
  }),
});

export const userCreationValidationSchema = z.object({
  userId: z.number({
    error: (iss) => {
      if (iss.input === undefined) return { message: "User id is required" };
      if (iss.code === "invalid_type")
        return { message: "User id must be a number" };
      return { message: "Invalid user id" };
    },
  }),

  username: z
    .string({
      error: (iss) => {
        if (iss.input === undefined) return { message: "Username is required" };
        if (iss.code === "invalid_type")
          return { message: "Username must be a string" };
        return { message: "Invalid username" };
      },
    })
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username cannot exceed 20 characters" })
    .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/, {
      message:
        "Username must start with a letter and contain only letters, numbers, and underscores",
    }),

  password: z
    .string({
      error: (iss) => {
        if (iss.input === undefined) return { message: "Password is required" };
        if (iss.code === "invalid_type")
          return { message: "Password must be a string" };
        return { message: "Invalid password" };
      },
    })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password cannot exceed 20 characters" })
    .regex(/[A-Z]/, {
      message: "Must include at least one uppercase letter",
    })
    .regex(/[0-9]/, {
      message: "Must include at least one number",
    }),

  fullName: fullNameValidationSchema,

  age: z.number({
    error: (iss) => {
      if (iss.input === undefined) return { message: "Age is required" };
      if (iss.code === "invalid_type")
        return { message: "Age must be a number" };
      return { message: "Invalid age" };
    },
  }),

  email: z.email({
    error: (iss) => {
      if (iss.input === undefined) return { message: "Email is required" };

      return { message: "Invalid email address!!" };
    },
  }),

  istActive: z.boolean().optional(),

  hobbies: z.array(z.string()).optional(),

  address: addressValidationSchema,

  orders: z.array(orderValidationSchema).optional(),
});

export const userUpationValidationSchema = z
  .object({
    userId: z
      .number({
        error: (iss) => {
          if (iss.code === "invalid_type")
            return { message: "User id must be a number" };
          return { message: "Invalid user id" };
        },
      })
      .optional(),

    username: z
      .string({
        error: (iss) => {
          if (iss.code === "invalid_type") return "Username must be a string";
          return "Invalid username";
        },
      })
      .max(20, { message: "Username cannot exceed 20 characters" })
      .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/, {
        message:
          "Username must start with a letter and contain only letters, numbers, and underscores",
      })
      .optional(),

    password: z
      .string({
        error: (iss) => {
          if (iss.code === "invalid_type")
            return { message: "Password must be a string" };
          return { message: "Invalid password" };
        },
      })
      .min(6, { message: "Password must be at least 6 characters" })
      .max(20, { message: "Password cannot exceed 20 characters" })
      .regex(/[A-Z]/, {
        message: "Must include at least one uppercase letter",
      })
      .regex(/[0-9]/, {
        message: "Must include at least one number",
      })
      .optional()
      .or(z.literal("")),

    fullName: fullNameValidationSchema,

    age: z.number({
      error: (iss) => {
        if (iss.input === undefined) return { message: "Age is required" };
        if (iss.code === "invalid_type")
          return { message: "Age must be a number" };
        return { message: "Invalid age" };
      },
    }),

    email: z.email({
      error: (iss) => {
        if (iss.input === undefined) return { message: "Email is required" };

        return { message: "Invalid email address!!" };
      },
    }),

    istActive: z.boolean().optional(),

    hobbies: z.array(z.string()).optional(),

    address: addressValidationSchema,

    orders: z.array(orderValidationSchema).optional(),
  })
  .optional();
