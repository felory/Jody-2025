import { defineConfig } from 'turbowatch';

export default defineConfig({
  triggers: [
    {
      expression: ['all', ['match', '*.ts'], ['match', 'src/**']],
      onChange: async () => {
        console.log('🔄 UI package changed — rebuilding...');
      },
    },
  ],
});
