module mux_2x1_dt(
input I0,I1,S,
output Y);

assign Y = S?I1:I0;
                
endmodule
module mux_tb;
reg I0,I1,S;
wire Y;

mux_2x1_dt uut(I0,I1,S,Y);

initial begin
S = 0; I0 = 1; I1 = 0;
#10
I0 = 0; I1 = 1;
#10
S = 1; I0 = 1; I1 = 0;
#10
I0 = 0; I1 = 1;
#10
$finish();
end

initial
begin
    $monitor($time, "I0=%b, I1=%b, S=%b, Y=%b", I0, I1, S,Y);
end
initial begin
$dumpfile("dump.vcd");
$dumpvars(0,mux_tb);
end
                
endmodule