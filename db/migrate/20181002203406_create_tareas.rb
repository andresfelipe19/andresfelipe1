class CreateTareas < ActiveRecord::Migration[5.1]
  def change
    create_table :tareas do |t|
      t.string :titulo
      t.string :descripcion
      t.string :text

      t.timestamps
    end
  end
end
