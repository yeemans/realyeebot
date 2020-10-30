class Board
  attr_accessor :turn_number, :cells
  def initialize(turn_number, cells) 
    @turn_number = turn_number 
    @cells = cells 
  end
  def game_end?(cells)
    # rows 
    return true if cells[0] == cells[1] && cells[1] == cells[2] && cells[0] != "#" 
    return true if cells[3] == cells[4] && cells[4] == cells[5] && cells[3] != "#"
    return true if cells[6] == cells[7] && cells[7] == cells[8] && cells[6] != "#"
    # columns 
    return true if cells[0] == cells[3] && cells[3] == cells[6] && cells[0] != "#"
    return true if cells[1] == cells[4] && cells[4] == cells[7] && cells[1] != "#"
    return true if cells[2] == cells[5] && cells[5] == cells[8] && cells[2] != "#"
    # diagonals 
    return true if cells[0] == cells[4] && cells[4] == cells[8] && cells[0] != "#"
    return true if cells[2] == cells[4] && cells[4] == cells[6] && cells[2] != "#"
    # cells is filled 
    return true if cells.count('#') == 0
    return false # default value
  end
  def draw_cells(cells)
    count = 0
    cells.each do |box| 
      count += 1
      print "   #{box}"
      print "\n" if count == 3 || count == 6 
    end
  end
  def get_turn(turn_number, cells)
    # if turn number is even, player one moves, otherwise player two moves 
    p "Pick a number from 1 to 9 to place your mark"
    move = gets 
    # convert move to an integer
    move = move.gsub("\n", "").to_i
    # rerun function if the square has already been marked  
    get_turn(turn_number - 1, cells) if cells[move - 1] != "#"
  
    # marking the cells, X if player one turn and O if player two turn
    turn_number % 2 == 0 ? cells[move - 1] = "X" : cells[move - 1] = "Y"

    draw_cells(cells) # draw the cells after each turn

    # recursively run function to get turns as long as nobody has won or tied
    if !game_end?(cells) 
      turn_number += 1
      get_turn(turn_number, cells)
    else  
      exit! # exit when game should end
    end
  end 
end
# game = Board.new(0, ['#', '#', '#', '#', '#', '#', '#', '#', '#'])
# game.get_turn(game.turn_number, game.cells)