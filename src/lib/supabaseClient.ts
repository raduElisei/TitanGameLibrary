import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://svqnvkwccrtreysdegyd.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2cW52a3djY3J0cmV5c2RlZ3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NjY4MjUsImV4cCI6MjAwOTM0MjgyNX0.Tcgp6zizOVOi0lJLGP5FeeCKt7R9Quahp4OiHSRtoI8'
);
