import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import members from "../assets/members.json";

interface Member {
  id: string;
  nom: string;
  prenom: string;
  age: number;
  payment_status: string;
  payment_method: string;
  subscription_progress: number;
}
const Dashboard: React.FC = () => {
  return (
    <div className="px-10 space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your gym management dashboard.
        </p>
      </div>
      <div>
        <Table>
          <TableCaption>A list of all the members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>CIN</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Prenom</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Payment status</TableHead>
              <TableHead>Payment method</TableHead>
              <TableHead>Subscription progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.members.map((member: Member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">{member.id}</TableCell>
                <TableCell>{member.nom}</TableCell>
                <TableCell>{member.prenom}</TableCell>
                <TableCell>{member.age}</TableCell>
                <TableCell>{member.payment_status}</TableCell>
                <TableCell>{member.payment_method}</TableCell>
                <TableCell className="text-center">
                  <Progress value={member.subscription_progress} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
