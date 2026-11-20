
/* =========================================
   RP TOKEN - SUPABASE CONFIGURATION
   ========================================= */

(() => {
    "use strict";

    const SUPABASE_URL =
        "https://tidyegzbuxrpnpfrdjgu.supabase.co";

    const SUPABASE_PUBLISHABLE_KEY =
        "sb_publishable_0h8WR657IRRpq05metJGvg_8FS4JsKY";

    // Check Supabase library
    if (!window.supabase || !window.supabase.createClient) {
        console.error("Supabase library not loaded.");
        return;
    }

    // Prevent duplicate initialization
    if (window.supabaseClient) {
        return;
    }

    // Create Supabase client
    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY,
        {
            auth: {
                persistSession: true,
                autoRefreshToken: true,
                detectSessionInUrl: true
            }
        }
    );

    console.log("RP TOKEN Supabase connected.");
})();
