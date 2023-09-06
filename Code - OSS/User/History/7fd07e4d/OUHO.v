module ADD(
    input [15:0] i0,
    input [15:0] i1,
    output [15:0] o,
    output carry,
    output overflow
);
    wire [16:0] temp_result;

    assign temp_result = i0 + i1;

    assign o = temp_result[15:0];
    assign carry = temp_result[16];
    assign overflow = (i0[15] == i1[15] && i0[15] != o[15]) ? 1'b1 : 1'b0;
endmodule

module SUBTRACT(
    input [15:0] i0,
    input [15:0] i1,
    output [15:0] o,
    output carry,
    output overflow
);
    wire [16:0] temp_result;

    assign temp_result = i0 - i1;

    assign o = temp_result[15:0];
    assign carry = temp_result[16];
    assign overflow = (i0[15] != i1[15] && i0[15] != o[15]) ? 1'b1 : 1'b0;
endmodule

module AND(
    input [15:0] i0,
    input [15:0] i1,
    output [15:0] o,
    output carry,
    output overflow
);
    assign o = i0 & i1;
    assign carry = 1'b0;
    assign overflow = 1'b0;
endmodule

module OR(
    input [15:0] i0,
    input [15:0] i1,
    output [15:0] o,
    output carry,
    output overflow
);
    assign o = i0 | i1;
    assign carry = 1'b0;
    assign overflow = 1'b0;
endmodule

module ALU(
    input [15:0] i0,
    input [15:0] i1,
    input [1:0] op,
    output [15:0] o,
    output carry,
    output overflow
);
    wire [15:0] add_out, sub_out, and_out, or_out;

    ADD add_inst (
        .i0(i0),
        .i1(i1),
        .o(add_out),
        .carry(carry),
        .overflow(overflow)
    );

    SUBTRACT sub_inst (
        .i0(i0),
        .i1(i1),
        .o(sub_out),
        .carry(carry),
        .overflow(overflow)
    );

    AND and_inst (
        .i0(i0),
        .i1(i1),
        .o(and_out),
        .carry(carry),
        .overflow(overflow)
    );

    OR or_inst (
        .i0(i0),
        .i1(i1),
        .o(or_out),
        .carry(carry),
        .overflow(overflow)
    );

    always @(*) begin
        case (op)
            2'b00: o = add_out;
            2'b01: o = sub_out;
            2'b10: o = and_out;
            2'b11: o = or_out;
            default: o = 16'b0; // Default to zero output for undefined operations
        endcase
    end
endmodule
