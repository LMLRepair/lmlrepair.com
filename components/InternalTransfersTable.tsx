import { Trash2 } from 'lucide-react';
import Link from 'next/link';
import { EditTransferItemDialog } from './EditTransferItem';
import { Card } from './ui/card';
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from './ui/table';

type Location = {
   locationId: number;
   name: string;
   description: string;
};

type Variation = {
   variationId: number;
   name: string;
   price: number;
   quantity: number;
   image: string | null;
   sku: string;
};

type InventoryItem = {
   inventoryItemId: number;
   name: string;
   description: string;
   brand: string;
   image: string;
   itemsCategoryId: number;
   itemsSubCategoryId: number;
   vendorId: number;
   locationId: number;
   variations: Variation[];
};

type InternalTransferProps = {
   internalTransferId: number;
   inventoryItemId: number;
   quantity: number;
   fromLocationId: number;
   toLocationId: number;
   fromLocation: Location;
   toLocation: Location;
   inventoryItem: InventoryItem;
};

type InternalTransfersTableProps = {
   transfers: InternalTransferProps[];
};

function InternalTransfersTable({ transfers }: InternalTransfersTableProps) {
   return (
      <div>
         <Card className='my-8'>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead className='lg:w-80'>Item Transferred</TableHead>
                     <TableHead>From Location</TableHead>
                     <TableHead>To Location</TableHead>
                     <TableHead>Quantity</TableHead>
                     <TableHead>Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {transfers.map((transfer) => (
                     <TableRow key={transfer.internalTransferId}>
                        <Link
                           href={`/inventory/transfers/${transfer.internalTransferId}`}
                        >
                           <TableCell className='hover:text-blue-500 hover:underline hover:underline-offset-1'>
                              {transfer.inventoryItem.name}
                           </TableCell>
                        </Link>
                        <TableCell>{transfer.fromLocation.name}</TableCell>
                        <TableCell>{transfer.toLocation.name}</TableCell>
                        <TableCell>{transfer.quantity}</TableCell>
                        <TableCell>
                           <div className='flex items-center gap-3'>
                              <EditTransferItemDialog
                                 transferId={transfer.internalTransferId}
                              />
                              <Trash2
                                 size={20}
                                 className='text-red-500 cursor-pointer'
                              />
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </Card>
      </div>
   );
}

export default InternalTransfersTable;
