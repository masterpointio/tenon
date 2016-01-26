module Tenon
  module TenonContent
    module RowTypes
      class ThreeColumnText < TenonContent::RowTypes::Base
        class << self
          def add_pieces_to(row)
            if row.pieces.empty?
              row.pieces.build(piece_type: 'Text', position: 0, size: 4)
              row.pieces.build(piece_type: 'Text', position: 1, size: 4)
              row.pieces.build(piece_type: 'Text', position: 2, size: 4)
            end
          end
        end
      end
    end
  end
end
