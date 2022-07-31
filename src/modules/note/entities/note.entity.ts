import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne , UpdateDateColumn, CreateDateColumn} from 'typeorm'

@Entity('notes')
export class NoteEntity{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 150})
    public title: string;

    @Column({default: false})
    public annotation: string;

    @Column()
    public isPublic: boolean = false;

    @Column()
    public userId: number;

    @CreateDateColumn()
    public createdAt: Date;
  
    @UpdateDateColumn()
    public updatedAt: Date;

    @ManyToOne(()=> UserEntity)
    public user?: UserEntity
}