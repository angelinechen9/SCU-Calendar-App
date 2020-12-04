CREATE TABLE public.app_user
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name text COLLATE pg_catalog."default" NOT NULL,
    phone_number text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id)
)
