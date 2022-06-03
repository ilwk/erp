/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/customers": {
    get: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.customers.inserted_at"];
          updated_at?: parameters["rowFilter.customers.updated_at"];
          data?: parameters["rowFilter.customers.data"];
          name?: parameters["rowFilter.customers.name"];
          id?: parameters["rowFilter.customers.id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["customers"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** customers */
          customers?: definitions["customers"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.customers.inserted_at"];
          updated_at?: parameters["rowFilter.customers.updated_at"];
          data?: parameters["rowFilter.customers.data"];
          name?: parameters["rowFilter.customers.name"];
          id?: parameters["rowFilter.customers.id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.customers.inserted_at"];
          updated_at?: parameters["rowFilter.customers.updated_at"];
          data?: parameters["rowFilter.customers.data"];
          name?: parameters["rowFilter.customers.name"];
          id?: parameters["rowFilter.customers.id"];
        };
        body: {
          /** customers */
          customers?: definitions["customers"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/materials": {
    get: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.materials.inserted_at"];
          updated_at?: parameters["rowFilter.materials.updated_at"];
          data?: parameters["rowFilter.materials.data"];
          name?: parameters["rowFilter.materials.name"];
          id?: parameters["rowFilter.materials.id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["materials"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** materials */
          materials?: definitions["materials"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.materials.inserted_at"];
          updated_at?: parameters["rowFilter.materials.updated_at"];
          data?: parameters["rowFilter.materials.data"];
          name?: parameters["rowFilter.materials.name"];
          id?: parameters["rowFilter.materials.id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.materials.inserted_at"];
          updated_at?: parameters["rowFilter.materials.updated_at"];
          data?: parameters["rowFilter.materials.data"];
          name?: parameters["rowFilter.materials.name"];
          id?: parameters["rowFilter.materials.id"];
        };
        body: {
          /** materials */
          materials?: definitions["materials"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/orders": {
    get: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.orders.inserted_at"];
          updated_at?: parameters["rowFilter.orders.updated_at"];
          data?: parameters["rowFilter.orders.data"];
          name?: parameters["rowFilter.orders.name"];
          id?: parameters["rowFilter.orders.id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["orders"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** orders */
          orders?: definitions["orders"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.orders.inserted_at"];
          updated_at?: parameters["rowFilter.orders.updated_at"];
          data?: parameters["rowFilter.orders.data"];
          name?: parameters["rowFilter.orders.name"];
          id?: parameters["rowFilter.orders.id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          inserted_at?: parameters["rowFilter.orders.inserted_at"];
          updated_at?: parameters["rowFilter.orders.updated_at"];
          data?: parameters["rowFilter.orders.data"];
          name?: parameters["rowFilter.orders.name"];
          id?: parameters["rowFilter.orders.id"];
        };
        body: {
          /** orders */
          orders?: definitions["orders"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  customers: {
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    inserted_at: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /** Format: jsonb */
    data?: string;
    /** Format: text */
    name?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
  };
  materials: {
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    inserted_at: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /** Format: jsonb */
    data?: string;
    /** Format: text */
    name?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
  };
  orders: {
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    inserted_at: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /** Format: jsonb */
    data?: string;
    /** Format: text */
    name?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: timestamp with time zone */
    updated_at?: string;
    /** Format: text */
    username?: string;
    /** Format: text */
    avatar_url?: string;
    /** Format: text */
    website?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description customers */
  "body.customers": definitions["customers"];
  /** Format: timestamp with time zone */
  "rowFilter.customers.inserted_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.customers.updated_at": string;
  /** Format: jsonb */
  "rowFilter.customers.data": string;
  /** Format: text */
  "rowFilter.customers.name": string;
  /** Format: uuid */
  "rowFilter.customers.id": string;
  /** @description materials */
  "body.materials": definitions["materials"];
  /** Format: timestamp with time zone */
  "rowFilter.materials.inserted_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.materials.updated_at": string;
  /** Format: jsonb */
  "rowFilter.materials.data": string;
  /** Format: text */
  "rowFilter.materials.name": string;
  /** Format: uuid */
  "rowFilter.materials.id": string;
  /** @description orders */
  "body.orders": definitions["orders"];
  /** Format: timestamp with time zone */
  "rowFilter.orders.inserted_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.orders.updated_at": string;
  /** Format: jsonb */
  "rowFilter.orders.data": string;
  /** Format: text */
  "rowFilter.orders.name": string;
  /** Format: uuid */
  "rowFilter.orders.id": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.updated_at": string;
  /** Format: text */
  "rowFilter.profiles.username": string;
  /** Format: text */
  "rowFilter.profiles.avatar_url": string;
  /** Format: text */
  "rowFilter.profiles.website": string;
}

export interface operations {}

export interface external {}
