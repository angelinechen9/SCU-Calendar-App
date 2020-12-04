CREATE TABLE public.attendee
(
    app_user_id uuid NOT NULL,
    event_id uuid NOT NULL,
    CONSTRAINT pkey PRIMARY KEY (app_user_id, event_id),
    CONSTRAINT fk_app_user_id FOREIGN KEY (app_user_id)
        REFERENCES public.app_user (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT fk_event_id FOREIGN KEY (event_id)
        REFERENCES public.event (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

CREATE INDEX attendee_pkey
    ON public.attendee USING btree
    (event_id ASC NULLS LAST, app_user_id ASC NULLS LAST)