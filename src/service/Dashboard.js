import api from './Api';

export const fetchDashboardData = async () => {
    // This calls your Spring Boot backend
    const response = await api.get('/dashboard/summary');
    return response.data; // Should return { user, walletBalance, stats, recentOrders, frequentlyOrdered }
};