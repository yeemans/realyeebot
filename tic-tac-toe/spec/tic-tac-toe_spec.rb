require './lib/tic-tac-toe.rb'
describe Board do 
  describe "#game_end?" do 
    it "Game ends in straight across 1st row" do
      game = Board.new(0, ['X', 'X','X',
                           'O', 'O','X',
                           'O', 'O','X'])
      expect(game.game_end?(game.cells)).to eql(true)
    end 
    it "Game ends in straight across 2nd row" do
      game = Board.new(0, ['X','X','O',
                           'O','O','O',
                           'X','X', 'O'])
      expect(game.game_end?(game.cells)).to eql(true)
    end
    it "Game ends in straight across 3rd row" do
      game = Board.new(69, ['X','X','O',
                            'O','O','O',
                            'X','X','X'])
      expect(game.game_end?(game.cells)).to eql(true)
    end
    it "Game ends in straight down 1st column" do
      game = Board.new(69, ['X','X','O',
                            'X','O','O',
                            'X','O','X'])
      expect(game.game_end?(game.cells)).to eql(true)
    end
    it "Game ends in straight down 2nd column" do
      game = Board.new(69, ['X','O','X',
                            'X','O','O',
                            'O','O','X'])
      expect(game.game_end?(game.cells)).to eql(true)
    end
    it "Game ends in straight down 3rd column" do
      game = Board.new(69, ['X','O','X',
                            'O','O','X',
                            'O','X','X'])
      expect(game.game_end?(game.cells)).to eql(true)
    end
    it "Game ends in 1st diagonal" do
      game = Board.new(69, ['X','O','X',
                            'O','X','O',
                            'O','X','X'])
      expect(game.game_end?(game.cells)).to eql(true)
    end
    it "Game ends in 2nd diagonal" do
      game = Board.new(69, ['X','O','O',
                            'O','O','X',
                            'O','X','X'])
      expect(game.game_end?(game.cells)).to eql(true)
    end
    it "Game ends when all spaces are filled" do 
      game = Board.new(9, ['X','O','X',
                           'X','O','O',
                           'O','X','X'])
      expect(game.game_end?(game.cells)).to eql(true)
    end
  end 
  describe "#draw_board" do 
    it "Draws board correctly." do 
      game = Board.new(69, ['X','O','O',
                            'O','O','X',
                            'O','X','X'])
      print("\n")
      expect { print("hello\n") }.to output("hello\n").to_stdout
      expect { game.draw_cells(game.cells) }.to output("   X   O   O
   O   O   X\n   O   X   X").to_stdout
    end
    it "Draws another board correctly." do 
      game = Board.new(420, ['X','X','O',
                             'O','O','X',
                             'X','O','#'])
      expect { game.draw_cells(game.cells) }.to output("   X   X   O
   O   O   X\n   X   O   #").to_stdout
    end
  end
end