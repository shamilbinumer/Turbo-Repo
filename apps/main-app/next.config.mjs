export default {
  async rewrites() {
      return [
          {
              source: '/shop/:product_id*',
              destination: 'http://localhost:3001/:product_id*',
          },
          {
              source: '/second-app',
              destination: 'http://localhost:3001', 
          },
          {
              source: '/shop',
              destination: 'http://localhost:3001', 
          }
      ];
  }
};