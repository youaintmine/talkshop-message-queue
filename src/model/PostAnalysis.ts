import { Column, DataType, Model, NotEmpty, Table } from "sequelize-typescript";

@Table({
    tableName: PostAnalysis.POST_TABLE_NAME,
})

export class PostAnalysis extends Model{
    public static POST_TABLE_NAME = "analyse" as string;
    public static POST_ID = "id" as string;
    public static POST_WORDS = "wordcount" as string
    public static AVERAGE_LENGTH = "wordlength" as string

@Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: PostAnalysis.POST_ID,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    field: PostAnalysis.POST_WORDS,
  })
 wordcount!: number;

  @Column({
    type: DataType.INTEGER,
    field: PostAnalysis.AVERAGE_LENGTH,
  })
  wordlength!: number;
}