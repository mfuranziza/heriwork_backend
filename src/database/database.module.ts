import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[
        MongooseModule.forRoot('mongodb+srv://crmproject:evolve24CRM@devcrm.x6ua05t.mongodb.net/?retryWrites=true&w=majority&appName=devCrm')
    ]
})
export class DatabaseModule {

}
