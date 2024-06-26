"use client";

import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Staff } from "@prisma/client";
import CustomContainer from "@/components/CustomContainer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AddStaff from "./AddStaff";
import EditStaff from "./EditStaff";
import DeleteStaff from "./DeleteStaff";
import { Badge } from "@/components/ui/badge";

interface StaffTableProps {
  staff: Staff[];
}

function StaffTable({ staff }: StaffTableProps) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const filteredStaff = staff.filter((staff) => {
    return (
      search.toLowerCase() === "" ||
      staff.staff_name.toLowerCase().includes(search)
    );
  });
  return (
    <CustomContainer>
      <h1 className="text-3xl px-2 mb-4">Staff</h1>
      <Card className="mb-4">
        <div className="flex justify-between items-center gap-5 px-3 py-6">
          <div className="flex items-center border border-primary-foreground px-3 rounded-md ">
            <Search />
            <Input
              placeholder="Search staff..."
              className="w-96 border-none focus-visible:outline-none "
              onChange={handleInputChange}
            />
          </div>

          <AddStaff />
        </div>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Mobile #</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStaff.map((staff) => (
            <TableRow key={staff.staff_id}>
              <TableCell>{staff.staff_name}</TableCell>
              <TableCell>{staff.mobile_number}</TableCell>
              <TableCell>{staff.email}</TableCell>
              <TableCell>{staff.location}</TableCell>
              <TableCell>
                <Badge variant={"secondary"}>{staff.job_title}</Badge>
              </TableCell>
              <TableCell>{staff.role}</TableCell>
              <TableCell>
                <EditStaff
                  staffId={staff.staff_id}
                  staffName={staff.staff_name}
                  mobileNumber={staff.mobile_number}
                  email={staff.email}
                  location={staff.location}
                  role={staff.role}
                  jobTitle={staff.job_title}
                />
              </TableCell>
              <TableCell>
                <DeleteStaff staffId={staff.staff_id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomContainer>
  );
}
export default StaffTable;
