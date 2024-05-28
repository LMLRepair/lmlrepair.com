export const ItemsCategory = [
   {
      name: 'Parts',
   },
   {
      name: 'Equipments',
   },
   {
      name: 'Accessories',
   },
   {
      name: 'Devices',
   },
];

export const ItemsSubCategory = [
   // Todo: Parts Subcategories
   { name: 'Screen' },
   { name: 'Back Glass' },
   { name: 'Battery' },
   { name: 'Charging Port' },
   { name: 'Back Camera' },
   { name: 'Front Camera' },
   { name: 'Back Camera Lens' },
   { name: 'Loudspeaker' },
   { name: 'Earpiece' },
   { name: 'Proximity Sensor' },
   { name: 'Taptic Engine' },

   // Todo: Equipments Subcategories
   { name: 'Tools' },
   { name: 'Supplies' },

   // Todo: Accessories Subcategories
   { name: 'Cases' },
   { name: 'Chargers' },
   { name: 'Screen Protectors' },

   // Todo: Devices Subcategories
   { name: 'Phone' },
   { name: 'Tablet' },
   { name: 'Laptop' },
   { name: 'Watch' },
   { name: 'Computer' },
];

export const Vendor = [
   {
      name: 'TechParts Co.',
   },
   {
      name: 'ScreenGuard Inc.',
   },
   {
      name: 'Logitech Official',
   },
   {
      name: 'Apple Store',
   },
];

export const Location = [
   {
      name: 'Warehouse A',
      description: 'Main warehouse for storing inventory items.',
   },
   {
      name: 'Retail Store 1',
      description: 'Retail store located in downtown.',
   },
   {
      name: 'Warehouse B',
      description: 'Overflow warehouse for additional storage.',
   },
   {
      name: 'Retail Store 2',
      description: 'Second retail store in the suburbs.',
   },
];

export const InventoryItem = [
   {
      name: 'iPhone 11 LCD Screen Replacement Aftermarket AM',
      description: 'Replacement screen for iPhone 11',
      sku: 'IPHONE-11-SCREEN-AFTERMARKET-AM',
      itemsCategoryId: 1, // Parts
      stock: 3,
      cost: 14,
      vendorId: 1, // TechParts Co.
      itemsSubCategoryId: 1, // Screen
      locationId: 1, // Warehouse A
   },
   {
      name: 'Samsung Galaxy S20 Ultra Screen Protector',
      description:
         'Tempered glass screen protector for Samsung Galaxy S20 Ultra',
      sku: 'SAMSUNG-S20ULTRA-SCREEN-PROTECTOR',
      itemsCategoryId: 3, // Accessories
      stock: 10,
      cost: 8.99,
      vendorId: 2, // ScreenGuard Inc.
      itemsSubCategoryId: 16, // Screen Protectors
      locationId: 2, // Retail Store 1
   },
   {
      name: 'Logitech G502 HERO Gaming Mouse',
      description:
         'Wired gaming mouse with customizable RGB lighting and 11 programmable buttons',
      sku: 'LOGITECH-G502-HERO',
      itemsCategoryId: 2, // Equipments
      stock: 5,
      cost: 49.99,
      vendorId: 3, // Logitech Official
      itemsSubCategoryId: 12, // Tools
      locationId: 3, // Warehouse B
   },
   {
      name: 'Apple AirPods Pro',
      description: 'Wireless Bluetooth earbuds with active noise cancellation',
      sku: 'APPLE-AIRPODS-PRO',
      itemsCategoryId: 4, // Devices
      stock: 20,
      cost: 199.99,
      vendorId: 4, // Apple Store
      itemsSubCategoryId: 20, // Watch
      locationId: 4, // Retail Store 2
   },
];

export const Variation = [
   {
      sku: 'IPHONE-11-SCREEN-AFTERMARKET-AM-RED',
      inventoryItemId: 1,
   },
   {
      sku: 'IPHONE-11-SCREEN-AFTERMARKET-AM-BLUE',
      inventoryItemId: 1,
   },
   {
      sku: 'SAMSUNG-S20ULTRA-SCREEN-PROTECTOR-GLASS',
      inventoryItemId: 2,
   },
   {
      sku: 'SAMSUNG-S20ULTRA-SCREEN-PROTECTOR-PLASTIC',
      inventoryItemId: 2,
   },
   {
      sku: 'LOGITECH-G502-HERO-WIRED',
      inventoryItemId: 3,
   },
   {
      sku: 'LOGITECH-G502-HERO-WIRELESS',
      inventoryItemId: 3,
   },
   {
      sku: 'APPLE-AIRPODS-PRO-WHITE',
      inventoryItemId: 4,
   },
];

export const StockReturn = [
   {
      inventoryItemId: 1, // iPhone 11 LCD Screen Replacement Aftermarket AM
      quantity: 1,
      reason: 'Defective product',
      returnedAt: new Date('2024-05-27T10:00:00Z'),
   },
   {
      inventoryItemId: 3, // Logitech G502 HERO Gaming Mouse
      quantity: 2,
      reason: 'Customer return',
      returnedAt: new Date('2024-05-25T15:30:00Z'),
   },
   {
      inventoryItemId: 4, // Apple AirPods Pro
      quantity: 3,
      reason: 'Change of mind',
      returnedAt: new Date('2024-05-26T12:45:00Z'),
   },
];

export const InternalTransfer = [
   {
      inventoryItemId: 1, // iPhone 11 LCD Screen Replacement Aftermarket AM
      quantity: 2,
      fromLocationId: 1, // Warehouse A
      toLocationId: 2, // Store B
   },
   {
      inventoryItemId: 3, // Logitech G502 HERO Gaming Mouse
      quantity: 1,
      fromLocationId: 2, // Store B
      toLocationId: 1, // Warehouse A
   },
   {
      inventoryItemId: 4, // Apple AirPods Pro
      quantity: 4,
      fromLocationId: 1, // Warehouse A
      toLocationId: 3, // Store C
   },
];

export const Sale = [
   {
      inventoryItemId: 1, // iPhone 11 LCD Screen Replacement Aftermarket AM
      quantity: 2,
      revenue: 50, // Assuming $25 per screen
      saleDate: new Date('2024-05-28T09:15:00Z'),
   },
   {
      inventoryItemId: 3, // Logitech G502 HERO Gaming Mouse
      quantity: 1,
      revenue: 60, // Assuming $60 per mouse
      saleDate: new Date('2024-05-28T12:30:00Z'),
   },
   {
      inventoryItemId: 4, // Apple AirPods Pro
      quantity: 2,
      revenue: 400, // Assuming $200 per AirPods Pro
      saleDate: new Date('2024-05-28T14:45:00Z'),
   },
];

export const InventoryAge = [
   {
      inventoryItemId: 1, // iPhone 11 LCD Screen Replacement Aftermarket AM
      arrivalDate: new Date('2024-04-15T00:00:00Z'), // Arrival date of the item in inventory
   },
   {
      inventoryItemId: 2, // Samsung Galaxy S20 Ultra Screen Protector
      arrivalDate: new Date('2024-04-20T00:00:00Z'), // Arrival date of the item in inventory
   },
   {
      inventoryItemId: 3, // Logitech G502 HERO Gaming Mouse
      arrivalDate: new Date('2024-04-25T00:00:00Z'), // Arrival date of the item in inventory
   },
   {
      inventoryItemId: 4, // Apple AirPods Pro
      arrivalDate: new Date('2024-05-01T00:00:00Z'), // Arrival date of the item in inventory
   },
];

export const LowStockAlert = [
   {
      inventoryItemId: 1, // iPhone 11 LCD Screen Replacement Aftermarket AM
      threshold: 5, // Low stock threshold for the item
   },
   {
      inventoryItemId: 2, // Samsung Galaxy S20 Ultra Screen Protector
      threshold: 3, // Low stock threshold for the item
   },
   {
      inventoryItemId: 3, // Logitech G502 HERO Gaming Mouse
      threshold: 2, // Low stock threshold for the item
   },
   {
      inventoryItemId: 4, // Apple AirPods Pro
      threshold: 10, // Low stock threshold for the item
   },
];