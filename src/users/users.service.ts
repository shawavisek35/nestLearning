import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [
    {
      id: 1,
      name: 'Avisek Shaw',
      email: 'avisek.shaw@gmail.com',
      role: 'ENGINEER'
    },
    {
      id: 2,
      name: 'Swarnim Shaw',
      email: 'Swarnim.shaw@gmail.com',
      role: 'ENGINEER'
    },
    {
      id: 3,
      name: 'Abhay Shaw',
      email: 'abhay.shaw@gmail.com',
      role: 'INTERN'
    },
    {
      id: 4,
      name: 'Avisek Shaw',
      email: 'avisek.shaw@gmail.com',
      role: 'INTERN'
    },
    {
      id: 5,
      name: 'Avisek Shaw',
      email: 'avisek.shaw@gmail.com',
      role: 'ADMIN'
    },
    {
      id: 6,
      name: 'Avisek Shaw',
      email: 'avisek.shaw@gmail.com',
      role: 'ADMIN'
    },
  ]

  
  findAll(role?: "INTERN" | "ADMIN" | 'ENGINEER') {
    if(role) {
      return this.users.filter((user) => {
        return user.role === role
      })
    } else {
      return this.users;
    }
  }

  findOne(id: number) {
    return this.users.filter((user) => {
      return user.id === id
    })
  }

  create(user: {name: string, email: string, role: "INTERN" | "ADMIN" | 'ENGINEER'}) {
    const userByHighestId = this.users.reduce((accum, user) => {
      return Math.max(accum, user.id);
    }, 0)

    const newUser = {
      id: userByHighestId + 1,
      ...user
    }

    this.users.push(newUser);
    return this.users;
  }
}
