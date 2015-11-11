class TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
  end

  def index
    @tracks = Track.all()
    render json: @tracks
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
  end

private
  def track_params
    params.require(:track).permit(:name, :roll)
  end

end
