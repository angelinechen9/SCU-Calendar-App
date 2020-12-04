CREATE TABLE public.event
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    create_time timestamp with time zone NOT NULL DEFAULT now(),
    occur_time timestamp with time zone NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    create_user_id uuid,
    duration integer,
    CONSTRAINT event_pkey PRIMARY KEY (id),
    CONSTRAINT create_user_fk FOREIGN KEY (create_user_id)
        REFERENCES public.app_user (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE INDEX fki_event_create_user_fk
    ON public.event USING btree
    (create_user_id ASC NULLS LAST)
    TABLESPACE pg_default;