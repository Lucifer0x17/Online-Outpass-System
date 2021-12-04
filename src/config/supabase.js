import { createClient } from '@supabase/supabase-js';
const url = 'https://qmzjsqtwchsbcoxzhkst.supabase.co';
const anon_key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODYyMTUyNCwiZXhwIjoxOTU0MTk3NTI0fQ.i_zj3iBbEo1ZhvJPFPGu-UqTk5bLiIcKezEieHul2j4';
const supabase = createClient(url, anon_key);

export default supabase;
