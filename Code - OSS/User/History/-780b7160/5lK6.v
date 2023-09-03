module mux_2x1_dt(
input I0,I1,S,
output Y);

assign Y = S?I1:I0;
                
endmodule
module TB;
reg [0:3]ii;
reg s0;reg s1;
wire yy;
initial
begin
$dumpfile("dump.vcd");
$dumpvars(0, TB);
end
mux4 newMUX(.i(ii), .j0(s0),.j1(s1),.o(yy));
initial
begin
$monitor($time, ": i0=%b,i1=%b,i2=%b,i3=%b,s0=%b,s1=%b,y=%b" ,ii[0],ii[1],ii[2],ii[3],s0,s1,yy);
#0 ii = 4'b0000;s0=1'b0;s1=1'b0;
#5 ii = 4'b1000;s0=1'b0;s1=1'b0;
#5 ii = 4'b0000;s0=1'b0;s1=1'b1;
#5 ii = 4'b0100;s0=1'b0;s1=1'b1;
#5 ii = 4'b0000;s0=1'b1;s1=1'b0;
#5 ii = 4'b0010;s0=1'b1;s1=1'b0;
#5 ii = 4'b0000;s0=1'b1;s1=1'b1;
#5 ii = 4'b0001;s0=1'b1;s1=1'b1;
end
endmodule