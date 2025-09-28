import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function simulateEventRegistration() {
  console.log("Iniciando coleta e cadastro de eventos...");

  // Simula 5 eventos
  for (let i = 1; i <= 5; i++) {
    const event = {
      name: `Evento Simulado ${i}`,
      type: 'simulado',
      created_at: new Date().toISOString(),
      value: Math.floor(Math.random() * 1000)
    };

    const { data, error } = await supabase
      .from('events') // tabela criada no Supabase
      .insert([event]);

    if (error) {
      console.log("❌ Erro ao registrar evento:", error.message);
    } else {
      console.log("✅ Evento registrado:", data);
    }
  }

  console.log("Coleta e registro de eventos concluídos!!");
}

simulateEventRegistration();
