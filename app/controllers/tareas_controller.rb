class TareasController < ApplicationController
	befere_action :authenticate_usuario, except: [:index,:show]
	befere_action :set_tarea, except: [:index, :new, :create]

  def index
  	@tareas = Tarea.all
  	#select * from tareas
  end
	def new
		@tarea = Tarea.new
	end
	def create
		@tarea = Tarea.new(titulo: params[:tarea][:titulo], descripcion: params[:tarea][:descripcion])
		@tarea.usuario = current_usuarion
		if @tarea.save 
			#insert into tareas(titulo,descripcion) values (formulario)
			redirect_to controller: 'tareas', action: 'show', id: @tarea. id
		else
		render :new
		
  		end
  	end
  def show
    	#@tarea = Tarea.find(params[:id])
    	#select * from tareas where id=:id
 end
def destroy
	#@tarea = Tarea.tarea(params[:id])
	@tarea.destroy
	redirect_to tareas_path
	#redirect_to controller: "tareas", action: "index"
end
	def edit
		#@tarea = Tarea.find(params[:id])
	end
	def update
	#@tarea = Tarea.find(tarea[:id])
		if @tarea.update(tarea_params)
		
		redirect_to controller: "tareas", action:'show', id: @tareas.id
	else
		redim :edit
	end
end
private
def set_taera
	@tarea = Tarea.find(pararms[:id])
end
def tarea_párams
	params.require(:tarea).permit(:titulo,:descripcion)
  end
end


