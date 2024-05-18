-- CreateTable
CREATE TABLE "frete" (
    "id" SERIAL NOT NULL,
    "name_transport" TEXT NOT NULL,
    "constant" DOUBLE PRECISION NOT NULL,
    "heigh_min" DOUBLE PRECISION NOT NULL,
    "heigh_max" DOUBLE PRECISION NOT NULL,
    "Width_min" DOUBLE PRECISION NOT NULL,
    "Width_max" DOUBLE PRECISION NOT NULL,
    "Delivery_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "frete_pkey" PRIMARY KEY ("id")
);
