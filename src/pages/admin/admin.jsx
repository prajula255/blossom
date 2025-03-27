import React, { useState } from "react";

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState("products");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>
      
      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-6 justify-center">
        {[
          { name: "Products", key: "products" },
          { name: "Orders", key: "orders" },
          { name: "Users", key: "users" },
          { name: "Reviews", key: "reviews" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`px-4 py-2 rounded-lg transition ${
              selectedTab === tab.key ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {selectedTab === "products" && <ProductsTab />}
        {selectedTab === "orders" && <OrdersTab />}
        {selectedTab === "users" && <UsersTab />}
        {selectedTab === "coupons" && <CouponsTab />}
        {selectedTab === "reviews" && <ReviewsTab />}
      </div>
    </div>
  );
};

const ProductsTab = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
    <p>Add, edit, and delete products here.</p>
  </div>
);

const OrdersTab = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Manage Orders</h2>
    <p>View and update order statuses.</p>
  </div>
);

const UsersTab = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
    <p>View and manage registered users.</p>
  </div>
);


const ReviewsTab = () => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Manage Reviews</h2>
    <p>Approve or remove customer reviews.</p>
  </div>
);

export default AdminPage;
